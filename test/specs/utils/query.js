/*
 * LiskHQ/lisky
 * Copyright © 2017 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 *
 */
import * as given from '../../steps/1_given';
import * as when from '../../steps/2_when';
import * as then from '../../steps/3_then';

describe('Query class', () => {
	describe('Given a Lisk API instance', () => {
		beforeEach(given.aliskAPIInstance);
		describe('Given a query instance', () => {
			beforeEach(given.aQueryInstance);
			it('Then the query instance should have the Lisk API instance as a client', then.theQueryInstanceShouldHaveTheLiskAPIInstanceAsAClient);
			it('Then the query instance should have a handler for "account"', then.theQueryInstanceShouldHaveAHandlerFor);
			it('Then the query instance should have a handler for "block"', then.theQueryInstanceShouldHaveAHandlerFor);
			it('Then the query instance should have a handler for "delegate"', then.theQueryInstanceShouldHaveAHandlerFor);
			it('Then the query instance should have a handler for "transaction"', then.theQueryInstanceShouldHaveAHandlerFor);
			describe('#sendRequest', () => {
				describe('Given an endpoint "delegates/get"', () => {
					beforeEach(given.anEndpoint);
					describe('Given a parameters object', () => {
						beforeEach(given.aParametersObject);
						describe('Given the parameters object has key "username" set to "lightcurve"', () => {
							beforeEach(given.theParametersObjectHasKeySetTo);
							describe('When the query instance sends a request using the endpoint and the parameters', () => {
								beforeEach(when.theQueryInstanceSendsARequestUsingTheEndpointAndTheParameters);
								it('Then it should not set the Lisk API instance testnet setting', then.itShouldNotSetTheLiskAPIInstanceTestnetSetting);
								it('Then it should use the Lisk API instance to send a request to the endpoint using the parameters', then.itShouldUseTheLiskAPIInstanceToSendARequestToTheEndpointUsingTheParameters);
								it('Then it should resolve to the result of sending the request', then.itShouldResolveToTheResultOfSendingTheRequest);
							});
							describe('Given an options object', () => {
								beforeEach(given.anOptionsObject);
								describe('Given the options object has key "testnet" set to boolean true', () => {
									beforeEach(given.theOptionsObjectHasKeySetToBoolean);
									describe('When the query instance sends a request using the endpoint, the parameters and the options', () => {
										beforeEach(when.theQueryInstanceSendsARequestUsingTheEndpointTheParametersAndTheOptions);
										it('Then it should set the Lisk API instance testnet setting to true', then.itShouldSetTheLiskAPIInstanceTestnetSettingTo);
										it('Then it should use the Lisk API instance to send a request to the endpoint using the parameters', then.itShouldUseTheLiskAPIInstanceToSendARequestToTheEndpointUsingTheParameters);
										it('Then it should set the Lisk API instance testnet setting back to the original setting', then.itShouldSetTheLiskAPIInstanceTestnetSettingBackToTheOriginalSetting);
										it('Then it should resolve to the result of sending the request', then.itShouldResolveToTheResultOfSendingTheRequest);
									});
								});
							});
						});
					});
				});
			});
			describe('#getBlock', () => {
				describe('Given a block ID "5650160629533476718"', () => {
					beforeEach(given.aBlockID);
					describe('When the query instance gets a block using the ID', () => {
						beforeEach(when.theQueryInstanceGetsABlockUsingTheID);
						it('Then the lisk instance should send a request to the blocks/get API endpoint with the block ID', then.theliskAPIInstanceShouldSendARequestToTheBlocksGetAPIEndpointWithTheBlockID);
					});
				});
			});
			describe('#getAccount', () => {
				describe('Given an address "13782017140058682841L"', () => {
					beforeEach(given.anAddress);
					describe('When the query instance gets an account using the address', () => {
						beforeEach(when.theQueryInstanceGetsAnAccountUsingTheAddress);
						it('Then the lisk instance should send a request to the accounts API endpoint with the address', then.theliskAPIInstanceShouldSendARequestToTheAccountsAPIEndpointWithTheAddress);
					});
				});
			});
			describe('#getTransaction', () => {
				describe('Given a transaction ID "16388447461355055139"', () => {
					beforeEach(given.aTransactionID);
					describe('When the query instance gets a transaction using the ID', () => {
						beforeEach(when.theQueryInstanceGetsATransactionUsingTheID);
						it('Then the lisk instance should send a request to the transactions/get API endpoint with the transaction ID', then.theliskAPIInstanceShouldSendARequestToTheTransactionsGetAPIEndpointWithTheTransactionID);
					});
				});
			});
			describe('#getDelegate', () => {
				describe('Given a delegate username "lightcurve"', () => {
					beforeEach(given.aDelegateUsername);
					describe('When the query instance gets a delegate using the username', () => {
						beforeEach(when.theQueryInstanceGetsADelegateUsingTheUsername);
						it('Then the lisk instance should send a request to the delegates/get API endpoint with the username', then.theliskAPIInstanceShouldSendARequestToTheDelegatesGetAPIEndpointWithTheUsername);
					});
				});
			});
		});
	});
});
