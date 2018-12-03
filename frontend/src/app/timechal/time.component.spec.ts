import { SearchResultComponent } from '../search-result/search-result.component'
import { WindowRefService } from '../Services/window-ref.service'
import { HttpClientModule } from '@angular/common/http'
import { UserService } from '../Services/user.service'
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing'
import { TimeComponent } from './time.component'
import { RouterTestingModule } from '@angular/router/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatIconModule } from '@angular/material/icon'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { CookieModule, CookieService } from 'ngx-cookie'
import { Location } from '@angular/common'
import { of, throwError } from 'rxjs'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { TranslateModule } from '@ngx-translate/core'

describe('TimeComponent', () => {
  let component: TimeComponent
  let fixture: ComponentFixture<TimeComponent>
  let userService
  let location

  beforeEach(async(() => {

    userService = jasmine.createSpyObj('UserService', ['TimeChal'])


    TestBed.configureTestingModule({
      declarations: [ TimeComponent, SearchResultComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([
          { path: 'search', component: SearchResultComponent }
        ]
        ),
        ReactiveFormsModule,
        CookieModule.forRoot(),
        TranslateModule.forRoot(),
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatDividerModule
      ],
      providers: [
        { provide: UserService, useValue: userService },
        WindowRefService,
        CookieService
      ]
    })
    .compileComponents()

    location = TestBed.get(Location)
  }))

  beforeEach(() => {

    fixture = TestBed.createComponent(TimeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have TimeChal_geuss as compulsory' , () => {
    component.GeussControl.setValue('')
    expect(component.GeussControl.valid).toBeFalsy()
    component.GeussControl.setValue('Value')
    expect(component.GeussControl.valid).toBe(true)
  })



})
