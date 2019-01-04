import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { extHintComponent } from './ext-hint.component'

describe('extHintComponent', () => {
  let component: extHintComponent
  let fixture: ComponentFixture<extHintComponent>

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ extHintComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(extHintComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  xit('should create', () => {
    expect(component).toBeTruthy()
  })
})
