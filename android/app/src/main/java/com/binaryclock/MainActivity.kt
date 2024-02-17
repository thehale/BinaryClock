package dev.jhale.binaryclock

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

// BootSplash Imports
import android.os.Bundle;
import com.zoontek.rnbootsplash.RNBootSplash;

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "BinaryClock"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override protected fun onCreate(savedInstanceState: Bundle?) {
    RNBootSplash.init(this) // ⬅️ initialize the splash screen
    super.onCreate(savedInstanceState) // or super.onCreate(null) with react-native-screens
  }
}
