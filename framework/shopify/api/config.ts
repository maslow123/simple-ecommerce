import { ApiConfig } from "@common/types/api";
import { fetchApi } from "@framework/utils";

class Config {
    private config: ApiConfig;
    
    constructor(config: any) {
        this.config = config;
    };

    getConfig(): any {
        return this.config;
    };
};

const configWrapper = new Config({
    fetch: fetchApi
});

export function getConfig() {
    return configWrapper.getConfig();
};

