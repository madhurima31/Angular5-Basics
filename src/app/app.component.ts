import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allowNewServer = 'no server';
  title = 'app';
  servername = 'Testing two way binding';
  server_name = 'no name yet';
  new_servername = 'another server';
  servercreated = false;
  servers = ['server 1', ' server 2 ' ] ;
  constructor() {

    setTimeout(() => {
      this.allowNewServer = 'timer on ';

    }, 2000);


  }

  ngOnInit() {
  }

  // event binding;
  onCreateServer() {
    this.allowNewServer = 'Server created';
  }
  onUpdateServerName(event: any) {
    console.log(event);
    this.servername = (<HTMLInputElement>event.target).value;
  }

  onWritingServerName(event: any) {
    // this.servercreated = true;
    this.server_name = (<HTMLInputElement>event.target).value;
  }
  onServerCreated(event: any) {
    this.servers.push(this.new_servername);
    this.servercreated = true;

    this.server_name = (<HTMLInputElement>event.target).value;

  }
}
