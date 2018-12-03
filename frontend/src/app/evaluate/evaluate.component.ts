import { CookieService } from 'ngx-cookie'
import { WindowRefService } from '../Services/window-ref.service'
import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { UserService } from '../Services/user.service'

import { Injectable } from '@angular/core';
dom.watch()


@Component({
  selector: 'app-login',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.scss']
})
export class EvaluateComponent implements OnInit {

  public CodeControl = new FormControl('', [ Validators.required])
  public hide = true
  public data: any
  public error: any

  constructor (private userService: UserService, private windowRefService: WindowRefService, private cookieService: CookieService, private router: Router) { }

  ngOnInit () {


  }

  submit () {

    this.data = {}


    console.log(this.data)

    this.data.input = this.CodeControl.value;
    this.userService.evaluate(this.data).subscribe((result: any) => {

      console.log("tests:" + result.data.results);

      if (result.data.results.includes(false)) {
        alert("hallo XSS")
      } else {
        console.log("YAH no XSS")
      }

    }, (error) => {
      console.log(error)
      this.error = JSON.stringify(error)
      this.CodeControl.markAsPristine()
    })


  }

}
