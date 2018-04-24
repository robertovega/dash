import { Component } from '@angular/core';

import { EvaluacionPage } from '../evaluacion/evaluacion';
import { GeneralPage } from '../general/general';
import { InfraestructuraPage } from '../infraestructura/infraestructura';
import { ParticipacionPage } from '../participacion/participacion';
import { ProgramasPage } from '../programas/programas';
import { RecursoshumanosPage } from '../recursoshumanos/recursoshumanos';
import { RecursosmaterialesPage } from '../recursosmateriales/recursosmateriales';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = GeneralPage;
  tab2Root = InfraestructuraPage;
  tab3Root = RecursoshumanosPage;
  tab4Root = RecursosmaterialesPage;
  tab5Root = EvaluacionPage;
  tab6Root = ProgramasPage;
  tab7Root = ParticipacionPage;
  constructor() {

  }
}
