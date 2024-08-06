import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'gear-text-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gear-textbox.component.html',
  styleUrl: './gear-textbox.component.scss'
})
export class GearTextboxComponent {
  @Input() caption!: string;
  //@Input() value: string = "";
  @Input() type: string = "text";
  @Input() placeholder: string = "";
  @Input() validate: boolean = false;
  @Input() validateMessage: string = "Campo inválido!";
  isValid: boolean = true;

  private _value!: string;
  @Input()
  get value(): string {
    return this._value;
  }
  set value(val: string) {
    this._value = val;
    this.valueChange.emit(this._value);
  }

  @Output() valueChange = new EventEmitter<string>();

  onChange(){
    this.valueChange.emit(this.value);

    if(this.validate){
      this.isValid = !(this.value == "" || this.value == null);
    }
  }
  
}

