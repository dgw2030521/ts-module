class TsModuleBase {
  private privateProp: string = 'private';
  protected protectedProp: string = 'protected';
  public publicProp: string = 'public';

  constructor(name: string) {}

  private sayPrivate() {
    console.log(`sayPrivate`);
  }

  protected sayProtected() {
    console.log(`sayProtected `);
  }

  public sayPublic() {
    console.log(`sayPublic `);
  }

  static sayStatic() {
    console.log(`sayStatic `);
  }
}

class TsModule extends TsModuleBase {
  constructor(name: string) {
    super(name);
  }
  public say() {
    console.log(`say`);
    this.sayPublic();
    this.sayProtected();
    console.log(this.protectedProp);
  }
}

export { TsModule, TsModuleBase };
