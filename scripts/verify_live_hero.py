import subprocess
import os

chrome_exe = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
out_screenshot = os.path.abspath("editable/assets/live_hero_verify.png")

cmd = [
    chrome_exe,
    '--headless=new',
    '--disable-gpu',
    '--force-device-scale-factor=1',
    '--window-size=1280,800',
    '--hide-scrollbars',
    f'--screenshot={out_screenshot}',
    'http://localhost:8080/'
]

print("Capturing live gate screenshot...")
subprocess.run(cmd, check=True)
print(f"Captured {out_screenshot}")
