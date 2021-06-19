"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceNullValues = void 0;
function replaceNullValues(value) {
    if (typeof value === 'object') {
        if (Array.isArray(value)) {
            for (let i = value.length - 1; i >= 0; --i) {
                const childValue = value[i];
                if (childValue === null) {
                    value[i] = undefined;
                }
                else if (childValue !== undefined) {
                    replaceNullValues(childValue);
                }
            }
        }
        else {
            for (const fieldName of Object.keys(value)) {
                const childValue = value[fieldName];
                if (childValue === null) {
                    value[fieldName] = undefined;
                }
                else if (childValue !== undefined) {
                    replaceNullValues(childValue);
                }
            }
        }
    }
}
exports.replaceNullValues = replaceNullValues;