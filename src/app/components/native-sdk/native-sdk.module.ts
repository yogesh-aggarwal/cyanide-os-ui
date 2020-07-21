import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NativeSdkComponent } from "./native-sdk.component";
import { BrowserModule } from "@angular/platform-browser";
import { NativeButton } from "./button/button.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { CheckboxComponent } from "./checkbox/checkbox.component";

@NgModule({
  declarations: [NativeSdkComponent, NativeButton, CheckboxComponent],
  imports: [BrowserModule, CommonModule, DragDropModule],
  exports: [NativeSdkComponent, NativeButton],
})
export class NativeSdkModule {}
