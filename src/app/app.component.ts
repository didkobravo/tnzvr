import { Component } from '@angular/core';
import { ClarityIcons, userIcon } from '@cds/core/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-cli';

  navItems: any[] = [
    { label: 'Home', icon: 'home' },
    { label: 'Explore', icon: 'map' },
    { label: 'Bolt Text', icon: 'bolt' },
    { label: 'Edit Text', icon: 'pencil' },
    { label: 'Hourglass Text', icon: 'hourglass' },
    { label: 'Happy Face Text', icon: 'happy-face' },
    { label: 'Flame Text', icon: 'flame' },
    { label: 'Thermometer Text', icon: 'thermometer' },
    { label: 'Lightbulb Text', icon: 'lightbulb' },
  ];

  constructor() {
    ClarityIcons.addIcons([
      'tnz-logo',
      '<svg width="29" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m28.33 18.647-6.844 8.575-.564-1.167 6.125-7.68 1.283.272Zm-20.533 7.39-6.125-7.681-1.264.291 6.845 8.575.544-1.186Z" fill="#61A60E"/><path d="M0 16.858 2.43 6.183 3.443 7l-2.178 9.586L0 16.858Zm28.739 0-2.43-10.675L25.296 7l2.197 9.586 1.245.272Z" fill="#A368ED"/><path d="M19.853 28H8.886l.564-1.167h9.84L19.852 28Zm5.308-23.256L15.284 0v1.303L24.15 5.56l1.012-.817Zm-11.705-3.46L4.589 5.56l-1.01-.797L13.455 0v1.283Z" fill="#01B8C5"/><path d="M19.23 24.617H9.49l-6.067-7.623L5.58 7.486l8.79-4.239 8.788 4.24 2.158 9.508-6.086 7.622Zm-9.178-1.167h8.614l5.386-6.728-1.925-8.4L14.37 4.57 6.591 8.303l-1.925 8.4 5.386 6.747Z" fill="#0087EE"/></svg>',
    ]);
  }
}
