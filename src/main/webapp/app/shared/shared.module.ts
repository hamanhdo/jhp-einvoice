import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EinvoiceSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [EinvoiceSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [EinvoiceSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EinvoiceSharedModule {
  static forRoot() {
    return {
      ngModule: EinvoiceSharedModule
    };
  }
}
