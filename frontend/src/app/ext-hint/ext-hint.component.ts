import { Component, OnInit } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { ConfigurationService } from '../Services/configuration.service'
import { FeedbackService } from '../Services/feedback.service'
import { IImage } from 'ng-simple-slideshow'
import { library, dom } from '@fortawesome/fontawesome-svg-core'

@Component({
  selector: 'app-hint',
  templateUrl: './ext-hint.component.html',
  styleUrls: ['./ext-hint.component.scss']
})

export class extHintComponent implements OnInit {

  public hide = true
  public data: any
  public error: any
  public code: any

  constructor (private configurationService: ConfigurationService, private feedbackService: FeedbackService, private sanitizer: DomSanitizer) {}

  ngOnInit () {
  }
}