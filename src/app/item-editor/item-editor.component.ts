import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-editor',
  templateUrl: './item-editor.component.html',
  styleUrl: './item-editor.component.scss'
})
export class ItemEditorComponent {

  @Input() item: any;
  @Input() index: number=0
  onEdit = false;

  edit(){
    this.onEdit = true;
  }

}
