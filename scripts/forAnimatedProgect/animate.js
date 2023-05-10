import { render } from "./render.js";
import { update } from "./update.js";

export function animate(data, time, ctx, screen) {
  data = update(data, time);
  render(time, ctx, screen);
  requestAnimationFrame((time) => animate(data, time, ctx, screen));
}
