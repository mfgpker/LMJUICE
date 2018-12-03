import { CookieService } from 'ngx-cookie'
import { WindowRefService } from '../Services/window-ref.service'
import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { UserService } from '../Services/user.service'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

dom.watch()


@Component({
  selector: 'app-login',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {

  public GeussControl = new FormControl('', [ Validators.required])
  public hide = true
  public data: any
  public error: any

  constructor (private userService: UserService, private windowRefService: WindowRefService, private cookieService: CookieService, private router: Router) { }

  ngOnInit () {


  }

  Geuss () {

    this.data = {}
    this.data.input = this.GeussControl.value


    console.log(this.data)

    this.userService.TimeChal(this.data).subscribe((result: any) => {
      console.log(JSON.stringify(result));
      alert(result.result)
    }, (error) => {
      console.log(error)
      this.error = error
      this.GeussControl.markAsPristine()
    })


  }

}
