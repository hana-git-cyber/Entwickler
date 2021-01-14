import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';
import {DEFAULT_INTERRUPTSOURCES, Idle} from '@ng-idle/core';
import {Keepalive} from '@ng-idle/keepalive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[];

  constructor(
    private router: Router,
    private idle: Idle,
    private keepalive: Keepalive
  ) {
    idle.setIdle(5);
    idle.setTimeout(1800);
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    idle.onTimeout.subscribe(() => {
      this.logout();
    });
    keepalive.interval(15);
    this.idle.watch();
  }

  logout() {
    window.location.href = '/logout';
  }

  ngOnInit() {
    this.items = [{
      label: 'Person List', command: (event) => {
        this.router.navigate(['/person']);
      }
    }
    ];
  }

  activeMenu(event) {
    let node;
    if (event.target.tagName === 'A') {
      node = event.target;
    } else {
      node = event.target.parentNode;
    }
    const menuitem = document.getElementsByClassName('ui-menuitem-link');
    for (let i = 0; i < menuitem.length; i++) {
      menuitem[i].classList.remove('active');
    }
    node.classList.add('active');
    if (node.parentNode.parentNode.parentNode.parentNode.tagName === 'LI') {
      node.parentNode.parentNode.parentNode.parentNode.children[0].classList.add('active');
    }
  }

}
