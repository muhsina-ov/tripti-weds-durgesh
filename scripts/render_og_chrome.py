import subprocess
import os
import time
from PIL import Image

def render_with_chrome():
    chrome_exe = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    cwd = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    
    # 1. Render 1200x630 card
    card_html = os.path.join(cwd, 'scripts', 'og-card.html')
    card_png = os.path.join(cwd, 'editable', 'assets', 'og-whatsapp-raw.png')
    
    cmd = [
        chrome_exe,
        '--headless=new',
        '--disable-gpu',
        '--force-device-scale-factor=1',
        f'--window-size=1200,630',
        '--hide-scrollbars',
        f'--screenshot={card_png}',
        f'file:///{card_html.replace(os.sep, "/")}'
    ]
    print('Running chrome for 1200x630...')
    subprocess.run(cmd, check=True)
    
    # Crop exactly to 1200x630 and convert to high-quality JPEG under 200KB
    img = Image.open(card_png)
    cropped = img.crop((0, 0, 1200, 630))
    final_jpg = os.path.join(cwd, 'editable', 'assets', 'og-whatsapp.jpg')
    cropped.convert('RGB').save(final_jpg, 'JPEG', quality=88, optimize=True)
    print(f"Generated {final_jpg}: {os.path.getsize(final_jpg)/1024:.1f} KB")
    
    # 2. Render 600x600 square card
    square_html = os.path.join(cwd, 'scripts', 'og-card-square.html')
    square_png = os.path.join(cwd, 'editable', 'assets', 'og-whatsapp-square-raw.png')
    
    cmd_sq = [
        chrome_exe,
        '--headless=new',
        '--disable-gpu',
        '--force-device-scale-factor=1',
        f'--window-size=600,600',
        '--hide-scrollbars',
        f'--screenshot={square_png}',
        f'file:///{square_html.replace(os.sep, "/")}'
    ]
    print('Running chrome for 600x600...')
    subprocess.run(cmd_sq, check=True)
    
    img_sq = Image.open(square_png)
    cropped_sq = img_sq.crop((0, 0, 600, 600))
    final_sq_jpg = os.path.join(cwd, 'editable', 'assets', 'og-whatsapp-square.jpg')
    cropped_sq.convert('RGB').save(final_sq_jpg, 'JPEG', quality=88, optimize=True)
    print(f"Generated {final_sq_jpg}: {os.path.getsize(final_sq_jpg)/1024:.1f} KB")

    # Cleanup temp raw files
    for f in [card_png, square_png]:
        if os.path.exists(f):
            os.remove(f)

if __name__ == '__main__':
    render_with_chrome()
