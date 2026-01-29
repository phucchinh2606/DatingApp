import { Component, inject, OnInit } from '@angular/core';
import { MemberService } from '../../../core/services/member-service';
import { MemberCard } from '../member-card/member-card';

@Component({
  selector: 'app-member-list',
  imports: [MemberCard],
  templateUrl: './member-list.html',
  styleUrl: './member-list.css',
})
export class MemberList implements OnInit {
  protected memberServices = inject(MemberService);
  // protected members$: Observable<Member[]>;

  ngOnInit(): void {
    this.memberServices.getMembers().subscribe();
  }
}
