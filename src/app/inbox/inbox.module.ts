import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxRoutingModule } from './inbox-routing.module';
import { HomeComponent } from './home/home.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { SafeHtmlPipe } from '../shared/safe-html.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    EmailIndexComponent,
    EmailCreateComponent,
    EmailReplyComponent,
    EmailShowComponent,
    PlaceholderComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    RouterOutlet,
    RouterLink,
    RouterModule,
    SafeHtmlPipe,
    SharedModule,
  ],
})
export class InboxModule {}
