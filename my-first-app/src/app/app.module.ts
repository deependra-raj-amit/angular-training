import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { TodoModule } from './todo/todo.module'; // Importing TodoModule

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    CounterComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
