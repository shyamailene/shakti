package com.shakti.repository;

import com.shakti.domain.Signup;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Signup entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SignupRepository extends JpaRepository<Signup, Long> {

}
