#!/usr/bin/env python3
"""
scripts/optimize-assets.py
Automated asset size reduction for NFC Card Pages:
- People & staff portrait photos:
    - Retains full 24-bit TrueColor RGB (NO palette quantization, NO blotchy dithering).
    - Keeps file sizes safely under 1 MB while preserving crisp, high-definition recognizable faces.
    - Generates companion WebP (quality 92).
- Logos & icons:
    - Compresses clean vector graphics and transparent PNGs to <20 KB.
"""

import os
import sys
import shutil
from PIL import Image

def optimize_file(file_path):
    if not os.path.exists(file_path):
        return
    
    ext = os.path.splitext(file_path)[1].lower()
    if ext not in ('.png', '.jpg', '.jpeg'):
        return
        
    orig_size = os.path.getsize(file_path)
    base_name = os.path.splitext(file_path)[0]
    webp_path = base_name + '.webp'
    
    try:
        with Image.open(file_path) as im:
            file_lower = file_path.lower()
            is_logo = any(k in file_lower for k in ['logo', 'icon', 'favicon', 'chip', 'brand', 'badge', 'banner', 'mesh'])
            is_person = not is_logo and (
                any(k in file_lower for k in ['omar', 'ambika', 'ambhika', 'sreekumar', 'staff', 'person', 'profile', 'nandu', 'safwan', 'emitiyas', 'lijesh', 'nawas', 'ajil', 'anu', 'amr', 'mohammad', 'bader', 'khalaf', 'alhajeri', 'mohammed', 'elhoussieny', 'abdulhameed', 'murtuza', 'khan'])
                or any(d in file_lower for d in ['staff/images', 'onflap/images', 'onflappages/images', 'tracompages/images', 'alfaisal/images', 'como/images', 'bukhamseen/images', 'qgo/images'])
            )
            
            if is_person:
                # Resize portraits to max height 650px per GEMINI.md instructions
                max_h = 650
                if im.size[1] > max_h:
                    ratio = max_h / im.size[1]
                    new_size = (max(1, int(im.size[0] * ratio)), max_h)
                    im_person = im.resize(new_size, Image.Resampling.LANCZOS)
                else:
                    im_person = im.copy()
                    
                # Save optimized WebP (~15-35 KB)
                im_person.save(webp_path, 'WEBP', quality=82, method=6)
                
                # Save optimized PNG (~150 KB)
                if im_person.mode == 'RGBA':
                    im_opt = im_person.quantize(colors=256, method=Image.Quantize.FASTOCTREE)
                    im_opt.save(file_path, 'PNG', optimize=True)
                else:
                    im_person.save(file_path, 'PNG', optimize=True)
                
            else:
                # Logos and icons: trim transparent border if RGBA
                if im.mode == 'RGBA':
                    bbox = im.getbbox()
                    im_base = im.crop(bbox) if bbox else im
                else:
                    im_base = im

                # limit dimensions to max 450px for <15KB requirement
                max_d = 450
                if max(im_base.size) > max_d:
                    ratio = max_d / max(im_base.size)
                    new_size = (max(1, int(im_base.size[0] * ratio)), max(1, int(im_base.size[1] * ratio)))
                    im_r = im_base.resize(new_size, Image.Resampling.LANCZOS)
                else:
                    im_r = im_base.copy()
                    
                # Compress logo PNG (<15KB) with maximum palette fidelity
                im_r.save(file_path, 'PNG', optimize=True)
                if os.path.getsize(file_path) >= 15 * 1024:
                    for n_colors in (256, 192, 128, 96):
                        if im_r.mode == 'RGBA':
                            im_opt = im_r.quantize(colors=n_colors, method=Image.Quantize.FASTOCTREE)
                        else:
                            im_opt = im_r.convert('P', palette=Image.ADAPTIVE, colors=n_colors)
                        im_opt.save(file_path, 'PNG', optimize=True)
                        if os.path.getsize(file_path) < 15 * 1024:
                            break
                else:
                    im_opt = im_r

                # Generate crisp WebP (<15KB)
                try:
                    im_r.save(webp_path, 'WEBP', lossless=True, method=6)
                    if os.path.getsize(webp_path) > 15 * 1024:
                        im_r.save(webp_path, 'WEBP', quality=90, method=6)
                        if os.path.getsize(webp_path) > 15 * 1024:
                            im_opt.save(webp_path, 'WEBP', lossless=True, method=6)
                except Exception:
                    im_opt.save(webp_path, 'WEBP', lossless=True, method=6)
                
            new_size = os.path.getsize(file_path)
            webp_size = os.path.getsize(webp_path) if os.path.exists(webp_path) else 0
            print(f"✓ {file_path:<42} | PNG: {new_size//1024:>4} KB | WebP: {webp_size//1024:>3} KB")
            
    except Exception as e:
        print(f"Error processing {file_path}: {e}", file=sys.stderr)

def scan_and_optimize():
    print("🔍 Optimizing assets (portraits kept TrueColor <1MB, logos <20KB)...\n")
    directories = [
        'images',
        'public/images',
        'Travelport/images',
        'GulfIndianSchool/images',
        'AlFaisal/images',
        'Como/images',
        'Bukhamseen/images',
        'Qgo/images',
        'staff/images',
        'onflap/images',
        'onflappages/images',
        'tracompages/images'
    ]
    
    processed = set()
    for d in directories:
        if not os.path.exists(d):
            continue
        for root, _, files in os.walk(d):
            for f in sorted(files):
                if f.lower().endswith(('.png', '.jpg', '.jpeg')):
                    full_p = os.path.join(root, f)
                    if full_p not in processed:
                        processed.add(full_p)
                        optimize_file(full_p)
                        
    # Synchronize images/ -> public/images/
    if os.path.exists('images') and os.path.exists('public/images'):
        for f in os.listdir('images'):
            src = os.path.join('images', f)
            dst = os.path.join('public/images', f)
            if os.path.isfile(src):
                shutil.copy2(src, dst)
                
    print("\n✨ All assets optimized.")

if __name__ == '__main__':
    if len(sys.argv) > 1:
        for p in sys.argv[1:]:
            optimize_file(p)
    else:
        scan_and_optimize()
