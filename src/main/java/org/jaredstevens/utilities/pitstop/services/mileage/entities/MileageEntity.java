package org.jaredstevens.utilities.pitstop.services.mileage.entities;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
public class MileageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(nullable = false)
    private long fillupDate;
    @Column(precision = 7, scale = 3)
    private BigDecimal fuelVolume;
    @Column(precision = 3, scale = 3)
    private BigDecimal fuelPrice;
    @Column(nullable = false)
    private int odometer;
    @Column(nullable = false)
    private int latitude;
    @Column(nullable = false)
    private int longitude;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getFillupDate() {
        return fillupDate;
    }

    public void setFillupDate(long fillupDate) {
        this.fillupDate = fillupDate;
    }

    public BigDecimal getFuelVolume() {
        return fuelVolume;
    }

    public void setFuelVolume(BigDecimal fuelVolume) {
        this.fuelVolume = fuelVolume;
    }

    public BigDecimal getFuelPrice() {
        return fuelPrice;
    }

    public void setFuelPrice(BigDecimal fuelPrice) {
        this.fuelPrice = fuelPrice;
    }

    public int getOdometer() {
        return odometer;
    }

    public void setOdometer(int odometer) {
        this.odometer = odometer;
    }

    public int getLatitude() {
        return latitude;
    }

    public void setLatitude(int latitude) {
        this.latitude = latitude;
    }

    public int getLongitude() {
        return longitude;
    }

    public void setLongitude(int longitude) {
        this.longitude = longitude;
    }
}
