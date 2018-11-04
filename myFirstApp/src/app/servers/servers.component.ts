import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName= 'ServerDefault';
  servers= [''];
  serverCreated = false;
  userName = '';
  allowNewServer = false;
  serverCreationStatus = "No server was created !"
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 1000)

  }

  ngOnInit() {
  }
  onCreatServer(){
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = "The server "+this.serverName+" was created with success."
  }
  onUpdateServerName(event){
    this.serverName= event.target.value;
  }
}
