/**
 * Rest api interface. For brevity,
 * headers and payload have been left out
 * and no responses are returned from api
 * calls.
 */

export interface Restful {
  get(): void;
  post(): void;
  patch(): void;
  delete(): void;  
}
