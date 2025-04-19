class SingletonTS {
  private static instance: SingletonTS;
	private version : string;

  private constructor(
		version : string
	) {
    // Constructor privado
		this.version = version
  }

  public static getInstance(version: string): SingletonTS {
    if (!SingletonTS.instance) {
      SingletonTS.instance = new SingletonTS(version);
			console.log(SingletonTS.instance)
    }
		console.log(SingletonTS.instance)
    return SingletonTS.instance;
  }
}

function appSingletonTS () {
	const singleton1 = SingletonTS.getInstance("Version 1");
	const singleton2 = SingletonTS.getInstance("Version 2");
	const singleton3 = SingletonTS.getInstance("Version 3");

	// const singleton4 = new SingletonTS //> Error por constructor privadañ

	console.log(singleton1 ===singleton2);
	console.log(singleton1 ===singleton3);
}

appSingletonTS()
