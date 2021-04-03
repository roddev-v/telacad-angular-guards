import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ComponentAGuard implements CanActivate {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const queryParams = next.queryParams;
    console.log(queryParams);

    const value = queryParams["value"];
    return parseInt(value, 10) > 0;
  }
}
