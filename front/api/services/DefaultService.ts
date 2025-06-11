/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { UserInput } from '../models/UserInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * ユーザー一覧の取得
     * @returns User 成功
     * @throws ApiError
     */
    public static getUsers(): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
        });
    }
    /**
     * 新しいユーザーの作成
     * @param requestBody
     * @returns any 作成成功
     * @throws ApiError
     */
    public static createUser(
        requestBody: UserInput,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * 特定ユーザーの取得
     * @param id
     * @returns User 成功
     * @throws ApiError
     */
    public static getUserById(
        id: string,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `ユーザーが見つからない`,
            },
        });
    }
}
