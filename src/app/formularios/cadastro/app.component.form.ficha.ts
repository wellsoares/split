import { OnInit, Component } from "@angular/core";

@Component({
    selector: 'app-texto',
    templateUrl: './app.component.form.ficha.html',
    styleUrls: ['./app.component.form.ficha.css']
  })
  export class FichaFormComponent implements OnInit {
    
    ngOnInit(): void {
        console.log('Funcionando');
    }
  }