import { TestBed } from "@angular/core/testing";
import { CardModule } from "./card.module";

describe("CardModule", () => {
  let pipe: CardModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CardModule] });
    pipe = TestBed.inject(CardModule);
  });

  it("can load instance", () => {
    expect(pipe).toBeTruthy();
  });
});
