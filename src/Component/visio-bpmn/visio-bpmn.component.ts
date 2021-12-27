import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { dia, ui, shapes, util, anchors, connectors } from '@clientio/rappid';
import { VisioBPMNServiceService } from "../../Service/visio-bpmnservice.service";

@Component({
  selector: 'app-visio-bpmn',
  templateUrl: './visio-bpmn.component.html',
  styleUrls: ['./visio-bpmn.component.scss']
})
export class VisioBPMNComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef;

  private graph: dia.Graph;
  private paper: dia.Paper;
  private scroller: ui.PaperScroller;


  constructor(private visioBPMNService: VisioBPMNServiceService,) { }

  LoadGraphItems() {
    this.visioBPMNService.LoadGraphItems().subscribe(data => {
      this.graph.fromJSON(data);
    }
    );
  }

  ngOnInit(): void {
    const graph = this.graph = new dia.Graph({}, { cellNamespace: shapes });

    const paper = this.paper = new dia.Paper({
      el: document.getElementById('paper')!,
      model: graph,
      background: {
        color: '#F8F9FA',
      },
      frozen: true,
      defaultAnchor: anchors.center,
      defaultConnector: connectors.normal,
      async: true,
      sorting: dia.Paper.sorting.APPROX,
      interactive: { linkMove: false },
      defaultConnectionPoint: { name: 'boundary' },
      cellViewNamespace: shapes
    });

    const scroller = this.scroller = new ui.PaperScroller({
      paper,
      autoResizePaper: true,
      cursor: 'grab'
    });
    scroller.render();

    shapes.bpmn.icons['myIcon'] = "../assets/script.svg";

    this.LoadGraphItems();

  }

  ngAfterViewInit(): void {
    const { scroller, paper, canvas } = this;
    canvas.nativeElement.appendChild(this.scroller.el);
    scroller.center();
    paper.unfreeze();
  }
}
