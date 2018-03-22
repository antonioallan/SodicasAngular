import { Component, OnInit } from '@angular/core';
import { Tag } from '../../domain/tag/tag.model';
import { TagService } from '../../domain/tag/tag.service';
import { DicaService } from '../../domain/dica/dica.service';
import { Dica } from '../../domain/dica/dica.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  dados: any = { titulo: '', tags: [] };
  opcaoTags: Tag[] = [];
  dicas: Dica[] = [];
  constructor(
    private _dicaService: DicaService,
    private _tagService: TagService
  ) { }

  ngOnInit() {
    this._tagService.buscar().subscribe(tags => this.opcaoTags = tags);
    this._dicaService.lancamento(0).subscribe(dicas => this.dicas = dicas);
  }

  removeTag(tag) {
    let tags = this.dados.tags.filter(tg => tg.id != tag.id);
    this.dados.tags = tags;
  }

  filtrar() {
    //Implemtar Ainda
  }

  selecionarTag(tag: Tag) {
    if (!this.dados.tags.map(tg => tg.id).includes(tag.id)) {
      this.dados.tags.push(tag);
    }
  }

  mais() {
    //Implemtar Ainda
  }

}
