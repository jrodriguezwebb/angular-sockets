import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SocketIoModule, SocketIoConfig} from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.prod';
import { FooterComponent } from './components/footer/footer.component';

const config: SocketIoConfig = {
  url: environment.wsUrl,
  options: {}
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
