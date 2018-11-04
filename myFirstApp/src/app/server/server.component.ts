import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:[`
    .Online{
        color: white;
    }
    `]
})
export class ServerComponent{
    serverID: number = (Math.random()*10);
    serverStatus: string = "Offline";
    constructor(){
        let tmp = Math.random() > 1/2 ? "Online" : "Offline";
        this.serverStatus = tmp; 
    }
    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus == 'Offline' ? 'red' : 'green' ;
    }
}