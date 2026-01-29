import { Component, computed, inject, input } from '@angular/core';
import { Member } from '../../../types/member';
import { RouterLink } from '@angular/router';
import { AgePipe } from '../../../core/pipes/age-pipe';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-member-card',
  imports: [RouterLink, AgePipe],
  templateUrl: './member-card.html',
  styleUrl: './member-card.css',
})
export class MemberCard {
  member = input.required<Member>();
  private accountService = inject(AccountService);

  displayImageUrl = computed(() => {
    const loggedInUser = this.accountService.currentUser();
    const cardMember = this.member();

    // Nếu card này là của tôi, lấy ảnh từ Identity (AccountService)
    if (loggedInUser && loggedInUser.id === cardMember.id) {
      return loggedInUser.imageUrl || '/user.png';
    }
    // Nếu không phải tôi, lấy ảnh của chính member đó
    return cardMember.imageUrl || '/user.png';
  });
}
