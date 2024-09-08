 rm -rf android/app/src/main/assets/index.android.bundle
 rm -rf android/app/src/main/assets/index.android.bundle.meta
 mkdir -p android/app/src/main/assets
 react-native bundle --platform android --dev false --reset-cache --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
 echo "END GENERATE BUNDLE"

rm -rf ./android/app/src/main/res/drawable-*
cd android && ./gradlew assembleRelease
echo "END CREATE APK"

cp ./app/build/outputs/apk/release/app-release.apk ../app-release-$1.apk
cd ..
