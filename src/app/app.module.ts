import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TaskbarComponent } from "./components/global/taskbar/taskbar.component";
import { NotificationPanelComponent } from "./components/global/notification-panel/notification-panel.component";
import { NativeSdkModule } from "./components/native-sdk/native-sdk.module";
import { DesktopComponent } from "./routes/global/desktop/desktop.component";

@NgModule({
  declarations: [
    AppComponent,
    TaskbarComponent,
    NotificationPanelComponent,
    DesktopComponent,
  ],
  imports: [BrowserModule, NativeSdkModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
