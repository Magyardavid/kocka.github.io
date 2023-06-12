#!/bin/bash
#python3 -m webbrowser https://www.youtube.com/watch_popup?v=YZeXCP2T2_k&list=PLc0gWA7zD73YgizDdK9lrtJbZ838QaWeQ  , 4-as pi
xdg-open https://www.youtube.com/watch_popup?v=YZeXCP2T2_k&list=PLc0gWA7zD73YgizDdK9lrtJbZ838QaWeQ
#python3 -m webbrowser https://www.mentimeter.com/app/presentation/algs3j227oaevx3duh898s1fym611k1k/nsdnvruqig3v , 4-as pi
xdg-open https://www.mentimeter.com/app/presentation/algs3j227oaevx3duh898s1fym611k1k/nsdnvruqig3v

cd /website/php1
php -S localhost:5500

cd /website/map
php -S localhost:8000

cd /website/news
php -S localhost:5000

#pi3 == 136 , pi4 == 142

