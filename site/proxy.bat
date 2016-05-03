@ECHO OFF
ECHO Setting up environment!

set http_proxy=http://proxy.sr.se:8080

ECHO Proxy set to %http_proxy%

REM git config --global http.proxy %http_proxy%

browser-sync start --server --directory


