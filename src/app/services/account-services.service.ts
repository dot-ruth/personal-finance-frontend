import { Injectable } from '@angular/core';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountServicesService {

  private account!:Account[]

  createAccount ( account: Account): void{
    this.account.push(account)
  }

  getAccount (): Account[] {
    return this.account;
  }

  getAccountById(id:number):Account | undefined{
    return this.account.find(acc => acc.id === id)
  }

  updateAccount ( updatedAccount: Account ):void {
    const index = this.account.findIndex( acc => acc.id === updatedAccount.id)
    this.account[index] = updatedAccount
  }

  delete (id:number):void {
    this.account = this.account.filter(acc => acc.id !== id)
  }
}
