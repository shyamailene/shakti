package com.shakti.repository;

import com.shakti.domain.Rangoli;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Rangoli entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RangoliRepository extends JpaRepository<Rangoli, Long> {

}
