import { Component } from '@angular/core';
import * as packageClr from '@clr/angular/package.json';
import * as packageCore from '@cds/core/package.json';
import * as packageNg from '@angular/core/package.json';
import '@cds/core/icon/register.js';
import { ClarityIcons, cogIcon } from '@cds/core/icon';

ClarityIcons.addIcons(cogIcon);

@Component({
  selector: 'clrx-versions',
  template: `
    <div class="header-actions">
      <clr-dropdown>
        <button
          class="nav-icon"
          clrDropdownTrigger
          aria-label="toggle settings menu"
        >
          <cds-icon shape="cog"></cds-icon>
          <cds-icon shape="angle" direction="down"></cds-icon>
        </button>
        <clr-dropdown-menu *clrIfOpen clrPosition="bottom-right">
          <a clrDropdownItem (click)="open = true">About</a>
        </clr-dropdown-menu>
      </clr-dropdown>
    </div>
    <clr-modal [(clrModalOpen)]="open">
      <h3 class="modal-title">About</h3>
      <div class="modal-body">
        <clr-stack-view>
          <clr-stack-block>
              <clr-stack-label>@clr/angular</clr-stack-label>
              <clr-stack-content>{{ package.clr.version }}</clr-stack-content>
          </clr-stack-block>
          <clr-stack-block>
              <clr-stack-label>@angular/core</clr-stack-label>
              <clr-stack-content>{{ package.ng.version }}</clr-stack-content>
          </clr-stack-block>
          <clr-stack-block>
              <clr-stack-label>@cds/core</clr-stack-label>
              <clr-stack-content>{{ package.core.version }}</clr-stack-content>
          </clr-stack-block>
        </clr-stack-view>
      </div>
    </clr-modal>
  `,
  styles: ['::ng-deep .stack-view {height: initial!important;}'],
  host: { '[class.header-actions]': 'true' },
})
export class VersionsComponent {
  package = { clr: packageClr, core: packageCore, ng: packageNg };
  major = `v${this.package.clr.version.split('.')[0]}`;
  open = false;
}
