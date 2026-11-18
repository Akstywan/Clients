#!/usr/bin/env python3
"""
scripts/watch-assets.py
Background watcher that monitors image directories for new or modified assets.
Automatically compresses newly uploaded images and generates WebP equivalents.
"""

import os
import time
import subprocess

WATCH_DIRS = ['images', 'public/images', 'Travelport/images', 'GulfIndianSchool/images']
CHECK_INTERVAL = 2.0

def get_files_mtime():
    mtimes = {}
    for d in WATCH_DIRS:
        if not os.path.exists(d):
            continue
        for root, _, files in os.walk(d):
            for f in files:
                if f.lower().endswith(('.png', '.jpg', '.jpeg')):
                    p = os.path.join(root, f)
                    try:
                        mtimes[p] = os.path.getmtime(p)
                    except OSError:
                        pass
    return mtimes

def main():
    print("👀 Watching for uploaded assets in:", ", ".join(WATCH_DIRS))
    print("Press Ctrl+C to stop.\n")
    
    last_state = get_files_mtime()
    
    while True:
        try:
            time.sleep(CHECK_INTERVAL)
            current_state = get_files_mtime()
            
            changed = []
            for path, mtime in current_state.items():
                if path not in last_state or mtime > last_state[path]:
                    changed.append(path)
                    
            if changed:
                for path in changed:
                    print(f"⚡ Detected new/modified asset: {path}")
                    subprocess.run(['python3', 'scripts/optimize-assets.py', path])
                last_state = get_files_mtime()
                
        except KeyboardInterrupt:
            print("\nStopped asset watcher.")
            break
        except Exception as e:
            time.sleep(1)

if __name__ == '__main__':
    main()
