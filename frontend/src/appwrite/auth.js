import { Client, Account, ID } from "appwrite";
import config from "../envConfigurations/config";

class AuthService {
    Client = new Client();
    account;
    constructor() {
        this.Client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.Client);
    }

    //Signup functionality
    async createAccount({ rollnumber, name, email, password }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name, rollnumber);
            if (userAccount) {
                //account is created so initiate login method
                return this.login({ email, password });
            }
            else {
                return userAccount;
            }
        } catch (error) {
            console.log("Error in createAccount::appwrite::", error);
            throw error;
        }
    }

    //Login
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);

        } catch (error) {
            console.log("Error in appwrite::auth.js::login: ", error);
            throw error;
        }
    }

    //Get current user status whether login or not
    async getCurrentUser() {
        try {
            const resp = await this.account.get()
            return resp
            // return await this.account.get();
        } catch (error) {
            console.log("Error in appwrite::aut.js::getCurrentUser: ", error);
            // throw error;
        }
        //If any error comes then null will be returned
        return null;
    }

    //Logout
    //It deletes current session
    async logout() {
        try {
            // await this.account.deleteSession('session-Id');
            await this.account.deleteSessions();//For deleting all sessions
        } catch (error) {
            console.log("Error in logout: ", error);
        }
    }
};

const authService = new AuthService();

export default authService;