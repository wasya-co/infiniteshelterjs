package me.guyd;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // add(com.getcapacitor.community.facebooklogin.FacebookLogin.class);
      add(com.oxylian.capacitor.plugin.facebook.FacebookLogin.class);

    }});
  }
}
