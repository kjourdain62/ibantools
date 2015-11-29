/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
/// <reference path="../src/IBANTools.ts" />

import chai = require('chai');
var expect = chai.expect;

import IBANTools from '../src/IBANTools';

describe('IBANTools', () => {

  describe('When initialized with empty object', () => {
		var subject = new IBANTools({});
	  it('isValid() should return false', () => {
			expect(subject.isValid()).to.be.false;
		});
	  it('getBBAN() should return null', () => {
			expect(subject.getBBAN()).to.be.null;
		});
	  it('getIBAN() should return null', () => {
			expect(subject.getIBAN()).to.be.null;
		});
	});

  describe('When initialized with valid Dutch IBAN', () => {
		var subject = new IBANTools({iban: 'NL91 ABNA 0417 1643 00'});
	  it('isValid() should return true', () => {
			expect(subject.isValid()).to.be.true;
		});
	  it('getBBAN() should return ABNA0417164300', () => {
			expect(subject.getBBAN()).to.equal('ABNA0417164300');
		});
	  it('getIBAN() should return NL91ABNA0417164300', () => {
			expect(subject.getIBAN()).to.equal('NL91ABNA0417164300');
		});
	  it('getCountryCode() should return NL', () => {
			expect(subject.getCountryCode()).to.equal('NL');
		});
	});

  describe('When initialized with invalid IBAN', () => {
		var subject = new IBANTools({iban: 'GGG'});
	  it('isValid() should return false', () => {
			expect(subject.isValid()).to.be.false;
		});
//	  it('getBBAN() should return null', () => {
//			expect(subject.getBBAN()).to.be.null;
//		});
//	  it('getIBAN() should return null', () => {
//			expect(subject.getIBAN()).to.be.null;
//		});
	});

	// BR97 0036 0305 0000 1000 9795 493P 1

});