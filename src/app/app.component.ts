import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {ActivationEnd, EventType, Router} from "@angular/router";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  platform: string = this.platformId.toString()
  isLoading = false

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router, private titleService: Title, private metaService: Meta) {
    router.events.subscribe(event => {
      switch (event.type) {
        case EventType.NavigationStart:
          this.isLoading = true
          break
        case EventType.NavigationEnd:
        case EventType.NavigationCancel:
        case EventType.NavigationError:
          this.isLoading = false
          break
        case EventType.ActivationEnd:
          this.onRouteChange(event as ActivationEnd)
          break
      }
    })
  }

  set title(value: string) {
    this.titleService.setTitle(value + ' - ' + this.platform)
  }

  set description(value: string) {
    this.metaService.updateTag({name: 'description', content: value + ' - ' + this.platform})
  }

  private onRouteChange(event: ActivationEnd) {
    const data = event.snapshot.data
    console.log("onRouteChange", data)
    const {titleFn, descriptionFn} = data
    titleFn && (this.title = titleFn(data))
    descriptionFn && (this.description = descriptionFn(data))
  }
}
