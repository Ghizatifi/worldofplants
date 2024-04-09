import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'bortkan',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  cordova: {
    preferences: {
      ScrollEnabled: 'false',
      'android-minSdkVersion': '22',
      'android-targetSdkVersion': '33',
      BackupWebStorage: 'none',
      SplashMaintainAspectRatio: 'true',
      FadeSplashScreenDuration: '300',
      SplashShowOnlyFirstTime: 'false',
      SplashScreen: 'screen',
      SplashScreenDelay: '3000',
      AutoHideSplashScreen: 'false',
      ShowSplashScreenSpinner: 'false',
      GOOGLE_MAPS_ANDROID_API_KEY: 'AIzaSyBX0HeTxa_zmzfNU8Q904h2TaVRALlKKtY',
      GOOGLE_MAPS_IOS_API_KEY: 'AIzaSyBX0HeTxa_zmzfNU8Q904h2TaVRALlKKtY'
    }
  }
};

export default config;
