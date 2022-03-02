!#/bin/sh

keytool -genkeypair -v -keystore globoticket-upload-key.keystore \
 -alias globoticket -keyalg RSA -keysize 2048 -validity 10000