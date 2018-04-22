package org.jaredstevens.utilities.pitstop.pojos;

public class ResponseBase<T> {
    public enum ResponseStatus {
        SUCCESS, FAILURE
    }
    private String message;
    private ResponseStatus status;
    private T responseData;

    public ResponseBase(String message, ResponseStatus status, T responseData) {
        this.message = message;
        this.status = status;
        this.responseData = responseData;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public ResponseStatus getStatus() {
        return status;
    }

    public void setStatus(ResponseStatus status) {
        this.status = status;
    }

    public T getResponseData() {
        return responseData;
    }

    public void setResponseData(T responseData) {
        this.responseData = responseData;
    }
}
